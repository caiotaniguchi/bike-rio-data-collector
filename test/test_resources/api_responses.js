module.exports.stationInformation = {
  last_updated: 1546286135,
  ttl: 26,
  data: {
    stations: [
      {
        station_id: '1',
        name: '1 - Central do Brasil',
        lat: -22.9045032,
        lon: -43.1907295,
        address: '1 - Central do Brasil',
        capacity: 17,
        rental_methods: [
          'KEY',
          'CREDITCARD',
          'TRANSITCARD',
          'PHONE'
        ]
      },
      {
        station_id: '2',
        name: '2 - Praça da República',
        lat: -22.9076921,
        lon: -43.1898851,
        address: '2 - Praça da República',
        capacity: 19,
        rental_methods: [
          'KEY',
          'TRANSITCARD',
          'PHONE'
        ]
      }
    ]
  }
}

module.exports.stationStatus = {
  last_updated: 1546134275,
  ttl: 280,
  data: {
    stations: [
      {
        station_id: '1',
        num_bikes_available: 16,
        num_bikes_available_types: {
          mechanical: 16,
          ebike: 0
        },
        num_bikes_disabled: 1,
        num_docks_available: 0,
        num_docks_disabled: 0,
        is_installed: 1,
        is_renting: 1,
        is_returning: 1,
        last_reported: 1546134233,
        is_charging_station: false
      },
      {
        station_id: '2',
        num_bikes_available: 3,
        num_bikes_available_types: {
          mechanical: 3,
          ebike: 0
        },
        num_bikes_disabled: 0,
        num_docks_available: 16,
        num_docks_disabled: 0,
        is_installed: 1,
        is_renting: 1,
        is_returning: 1,
        last_reported: 1546134075,
        is_charging_station: false
      }
    ]
  }
}

module.exports.systemInformation = {
    last_updated: 1546129151,
    ttl: 300,
    data: {
        system_id: 'bike_rio',
        language: 'en',
        name: null,
        timezone: 'America/Sao_Paulo',
        build_version: '4.9.3',
        build_label: '2018-12-11',
        build_hash: 'ced96ec',
        build_number: '355',
        mobile_head_version: '2',
        mobile_minimum_supported_version: '1',
    }
}

module.exports.systemPricingPlans = {
    last_updated: 1546286633,
    ttl: 91,
    data: {
        plans: [
            {
                plan_id: '1',
                name: 'Plano anual',
                currency: 'BRL',
                price: '160.00',
                is_taxable: 1,
                description: 'Plano anual'
            },
            {
                plan_id: '2',
                name: 'Plano mensal',
                currency: 'BRL',
                price: '10.00',
                is_taxable: 1,
                description: 'Plano mensal'
            }
        ]
    }
}
