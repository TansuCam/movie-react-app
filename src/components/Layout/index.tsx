import React, { ReactNode } from 'react';
import { Layout, Space } from 'antd';
import styles from './style.module.scss';

const { Header, Content, Footer } = Layout;

interface LayoutProps {
    children: ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
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
