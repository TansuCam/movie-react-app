// React
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { Layout, Space } from 'antd';

// Styles
import styles from './style.module.scss';

const { Header, Content, Footer } = Layout;

interface LayoutProps {
    /**
     * The content to be displayed within the Layout component.
     * 
     * @type {ReactNode}
     * @required
     */
    children: ReactNode;
}

// Layout component 
const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header} onClick={() => navigate("/")}>
                <div className={styles.logo}>Movie Finder</div>
            </Header>

            <Content className={styles.content}>
                <div className={styles.container}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        {children}
                    </Space>
                </div>
            </Content>

            <Footer className={styles.footer}>
                <p>© 2025 Movie Finder. All rights reserved.</p>
            </Footer>
        </Layout>
    );
};

export default LayoutComponent;
