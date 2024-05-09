import { getEnvVariables } from "../helpers";

const { BACKEND_URL, BACKEND_PORT } = getEnvVariables();
const iotUrl = `${BACKEND_URL}:${BACKEND_PORT}/iot-data`;
const machineLearningUrl = `${BACKEND_URL}:${BACKEND_PORT}/machine-learning-data`;

export const fetchIotData = async () => {
    const response = await fetch(iotUrl);
    return response;
};

export const fetchMachineLearningData = async () => {
    const response = await fetch(machineLearningUrl);
    return response;
};