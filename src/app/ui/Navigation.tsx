"use client";

import React, {useState} from "react";
import {
    BgColorsOutlined,
    ExperimentOutlined,
    ThunderboltOutlined,
    SmileFilled,
    ToolOutlined,
} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {Menu, Row, Col} from "antd";
import {usePathname} from "next/navigation";
import Link from "next/link";

const items: MenuProps["items"] = [
    {
        label: <Link href='/'>IMGPrompt</Link>,
        key: "/",
        icon: <BgColorsOutlined/>,
    },
    {
        label: (
            <a
                href='https://chat.lyzplus.cn'
                target='_blank'
                rel='noopener noreferrer'>
                学术版 ChatGPT
            </a>
        ),
        key: "aishort",
        icon: <ExperimentOutlined/>,
    },
    {
        label: (
            <a
                href='https://gpt.lyzplus.cn'
                target='_blank'
                rel='noopener noreferrer'>
                轻量版 ChatGPT
            </a>
        ),
        key: "LearnData",
        icon: <ThunderboltOutlined/>,
    },
    {
        label: (
            <a
                href='https://tool.lyzplus.cn'
                target='_blank'
                rel='noopener noreferrer'>
                在线工具大全
            </a>
        ),
        key: "Tools",
        icon: <ToolOutlined/>,
    },
];

export function Navigation() {
    const pathname = usePathname();
    const [current, setCurrent] = useState(pathname);

    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <Row justify='space-between' align='middle' gutter={16}>
            <Col xs={20} sm={18} md={16}>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode='horizontal'
                    items={items}
                />
            </Col>
            <Col>
                <Row gutter={16} wrap={false}>
                    <Col>
                        <a
                            href='https://www.lyzplus.cn'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{marginLeft: "10px"}}>
                            <SmileFilled style={{color: "black", fontSize: "24px"}}/>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
