const fetch = require('node-fetch');

const getBikeRioData = async (endpoint) => {
    const baseUrl = 'https://riodejaneiro.publicbikesystem.net/ube/gbfs/v1/en';
    const url = `${baseUrl}/${endpoint}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
          return response.json();
      }
      throw response.status;
    } catch (error) {
      console.log(error);
    }
};

const transformStationInformationData = (rawData) => {
    return rawData.data.stations;
}

const transformStationStatusData = (rawData) => {
    let data = rawData.data.stations;

    for (let i = 0; i < data.length; i++) {
        data[i].num_bikes_available_mechanical = data[i].num_bikes_available_types.mechanical;
        data[i].num_bikes_available_ebike = data[i].num_bikes_available_types.ebike;
        delete data[i].num_bikes_available_types;
    }
    return data
}

const transformSystemInformationData = (rawData) => {
    return rawData.data;
}

const transformSystemPricingPlansData = (rawData) => {
    return rawData.data.plans;
}

const transformData = (rawData, endpoint) => {
    const dataTransforms = {
        station_information: transformStationInformationData,
        station_status: transformStationStatusData,
        system_information: transformSystemInformationData,
        system_pricing_plans: transformSystemPricingPlansData,
    }
    return dataTransforms[endpoint](rawData);
}

const get = async (endpoint) => {
    const rawData = await getBikeRioData(endpoint);
    return transformData(rawData, endpoint);
}

module.exports.get = get;
