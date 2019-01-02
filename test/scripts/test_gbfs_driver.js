const assert = require('assert');

const nock = require('nock');

const gbfsDriver = require('../../scripts/gbfs_driver.js');
const apiResponses = require('../test_resources/api_responses.js');

describe('GBFS Driver', () => {
    describe('#get()', function() {
        beforeEach(() => {
            nock('https://riodejaneiro.publicbikesystem.net/ube/gbfs/v1/en')
                .get('/station_information')
                .reply(200, apiResponses.stationInformation)
                .get('/station_status')
                .reply(200, apiResponses.stationStatus)
                .get('/system_information')
                .reply(200, apiResponses.systemInformation)
                .get('/system_pricing_plans')
                .reply(200, apiResponses.systemPricingPlans);
        });

        it('should return formatted station information data when given "station_information" parameter',
            async () => {
                const result = await gbfsDriver.get('station_information');
                assert.deepEqual(result, apiResponses.stationInformation.data.stations);
            }
        );

        it('should return formatted station status data when given "station_status" parameter',
            async () => {
                const result = await gbfsDriver.get('station_status');
                const stations = JSON.parse(JSON.stringify(apiResponses.stationStatus.data.stations));
                assert.equal(
                    result[0].num_bikes_available_mechanical,
                    stations[0].num_bikes_available_types.mechanical
                );
                assert.equal(
                    result[1].num_bikes_available_ebike,
                    stations[1].num_bikes_available_types.ebike
                );
                for (var i = 0; i < result.length; i++) {
                    delete result[i].num_bikes_available_mechanical;
                    delete result[i].num_bikes_available_ebike;
                    delete stations[i].num_bikes_available_types;
                }
                assert.deepEqual(result, stations);
            }
        );

        it('should return formatted system information data when given "system_information" parameter',
            async () => {
                const result = await gbfsDriver.get('system_information');
                assert.deepEqual(result, apiResponses.systemInformation.data);
            }
        );

        it('should return formatted system pricing plans data when given "system_pricing_plans" parameter',
            async () => {
                const result = await gbfsDriver.get('system_pricing_plans');
                assert.deepEqual(result, apiResponses.systemPricingPlans.data.plans);
            }
        );
    });
});
