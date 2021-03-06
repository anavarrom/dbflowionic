/**
 * dbFlowServer
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Problem {
    // An absolute URI that identifies the problem type.  When dereferenced, it SHOULD provide human-readable documentation
    type?: string;

    // A short, summary of the problem type. Written in english and readable for engineers
    title?: string;

    /**
     * The HTTP status code generated by the origin server for this occurrence of the problem.
     */
    status?: number;
    /**
     * A human readable explanation specific to this occurrence of the problem.
     */
    detail?: string;
    /**
     * An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced. 
     */
    instance?: string;
}

