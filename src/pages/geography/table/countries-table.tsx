import { gql, useQuery } from '@apollo/client';
import { Row, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { addListener } from 'process';
import React from 'react';

interface DataType {
    key: React.Key;
    name: string;
    description: string;
    capital: string
    lenguages: [Lenguage]
}

interface Lenguage {
    name: string
    native: boolean
}

interface IMyProps {
    code: string
}


const TableCountries: React.FC<IMyProps> = (props: IMyProps) => {


    const FIND_COUNTRY = gql(
        'query{ countries(  filter: { continent: { eq: "' +
        props.code +
        '" }}){name code capital emoji }}'
    );

    const ALL_COUNTRY = gql(
        'query{ countries {name code }}'
    );

    let query = ALL_COUNTRY;

    if (props.code != "All") {
        query = FIND_COUNTRY
    }

    const { data, error, loading } = useQuery(query);

    const columns: ColumnsType<DataType> = [
        {
            title: 'Country',
            dataIndex: 'name',
            render: text => <a>{text}</a>,
        },

    ];
    const dataDTO: DataType[] = []

    if (loading) {
    } else {
        data.countries.map((c: any) => {
            dataDTO.push(
                {
                    key: c.code,
                    name: c.name,
                    description: "la bandera es ",
                    capital: c.capital,
                    lenguages: [{
                        name: "hajshajs",
                        native: true
                    }]
                },
            )
        })
    }







    return (
        <Table
            columns={columns}
            expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,

            }}
            dataSource={dataDTO}
        />
    );
}

export default TableCountries;