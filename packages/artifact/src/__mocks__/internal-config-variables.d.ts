/**
 *  Mocks default limits for easier testing
 */
export declare function getUploadFileConcurrency(): number;
export declare function getUploadChunkConcurrency(): number;
export declare function getUploadChunkSize(): number;
export declare function getUploadRetryCount(): number;
/**
 * Mocks the 'ACTIONS_RUNTIME_TOKEN', 'ACTIONS_RUNTIME_URL' and 'GITHUB_RUN_ID' env variables
 * that are only available from a node context on the runner. This allows for tests to run
 * locally without the env variables actually being set
 */
export declare function getRuntimeToken(): string;
export declare function getRuntimeUrl(): string;
export declare function getWorkFlowRunId(): string;