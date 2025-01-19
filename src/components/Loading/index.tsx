import { Flex, Spin } from "antd";

const LoadingSpinner = () => (
    <Flex justify="center" align="center" style={{ height: "60vh" }}>
        <Spin size="large" />
    </Flex>
);

export default LoadingSpinner;