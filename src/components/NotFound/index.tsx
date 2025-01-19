import React from 'react'
import { Button, Result } from 'antd'

import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Result
            className={styles.notFound}
            status="404"
            title="Ohh! Page Not Found"
            subTitle="We can't seem to find the page you are looking for."
            extra={<Button type="primary" onClick={() => navigate("/")}> Back Home</ Button>}
        />
    )
}

export default NotFound