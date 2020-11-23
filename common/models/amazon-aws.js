'use strict';

const AWS = require('aws-sdk');

module.exports = function(AmazonAWS) {

    AWS.config.update({
        region:'eu-west-1',
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    let ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

    AmazonAWS.regions = function(
        cb
    ) {
        try {
            var params = {};
            ec2.describeRegions(params, function(err, data) {
                if (err) {
                    cb(err);
                } else {
                    cb(null, data);
                }
            });
        } catch(error) {
            cb(error);
        }
    }

    AmazonAWS.remoteMethod('regions', {
        returns: { type: 'object', root: true },
        http: { verb: 'get' },
    });

    AmazonAWS.vpcs = function(
        cb
    ) {
        try {
            let ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
            var params = {};
            ec2.describeVpcs(params, function(err, data) {
                if (err) {
                    cb(err);
                } else {
                    cb(null, data);
                }
            });
        } catch(error) {
            cb(error);
        }
    }

    AmazonAWS.remoteMethod('vpcs', {
        returns: { type: 'object', root: true },
        http: { verb: 'get' },
    });

    AmazonAWS.subnets = function(
        vpcIds, cb
    ) {
        try {
            var params = {
                Filters: [
                    {
                        Name: "vpc-id",
                        Values: vpcIds
                    }
                ]
            };
            ec2.describeSubnets(params, function(err, data) {
                if (err) {
                    cb(err);
                } else {
                    cb(null, data);
                }
            });
        } catch(error) {
            cb(error);
        }
    }

    AmazonAWS.remoteMethod('subnets', {
        accepts: [
            {
                arg: 'vpcIds',
                type: 'array',
                description: 'VPC Ids in array.',
                required: true,
            }
        ],
        returns: { type: 'object', root: true },
        http: { verb: 'get' },
    });

};
