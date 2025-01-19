// React
import React from 'react';

// Components
import { Button, Result } from 'antd';

// Styles
import styles from './style.module.scss';

// React Router
import { useNavigate } from 'react-router-dom';

// NotFound component
const NotFound: React.FC = () => {
    // React Router hook to navigate between pages
    const navigate = useNavigate();

    return (
        <Result
            className={styles.notFound}
            status="404"
            title="Ohh! Page Not Found"
            subTitle="We can't seem to find the page you are looking for."
            extra={<Button type="primary" onClick={() => navigate("/")}>Back Home</Button>}
        />
    );
};

export default NotFound;
