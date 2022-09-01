import { gql, useQuery } from '@apollo/client';
import { Result, Spin, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import "../../geography-style.css"

interface DataType {
    key: React.Key;
    name: string;
    description: Description;
    capital: string
    languages: Languages[]
}

interface Description {
    code: string
    capital: string
}

interface IMyProps {
    code: string
}
interface Languages {
    name: string
    code: string
    native: string
}


const TableCountries: React.FC<IMyProps> = (props: IMyProps) => {
    //Queries GraphQL
    const FIND_COUNTRY = gql(
        'query{ countries(  filter: { continent: { eq: "' +
        props.code +
        '" }}){name code capital  languages{ code name  native} }}'
    );
    const ALL_COUNTRY = gql(
        'query{ countries {name code capital  languages{ code name  native} }}'
    );

    //Set query to use
    let query = ALL_COUNTRY;
    if (props.code != "All") {
        query = FIND_COUNTRY
    }

    //Send query
    const { data, error, loading } = useQuery(query);

    //Set Spin
    if (loading) {
        return(<Spin className="spin"></Spin>)
    }

    //Control error data entry
    if (error) {
        return (
            <Result
                status="warning"
                title="There are some problems with your operation."
            />
        );
    }

    //Parse data input to dataDTO
    const dataDTO: DataType[] = []
    if (!loading) {
        console.log(data)
        data.countries.map((c: any) => {
            dataDTO.push(
                {
                    key: c.code,
                    name: c.name,
                    description: { code: c.code, capital: c.capital },
                    capital: c.capital,
                    languages: c.languages
                },
            )
        })
    }

    //Build table 
    const columns: ColumnsType<DataType> = [
        {
            title: 'Country',
            dataIndex: 'name',
            render: text => <a target="_blank" href={`https://wikipedia.org/wiki/${text}`} >{text}</a>,
        },

    ];

    return (
        <Table className='tableCountries'
            columns={columns}
            expandable={{
                expandedRowRender: record =>
                    <><p style={{ margin: 0 }}><b>Code:</b> {record.description.code}</p>
                        <p style={{ margin: 0 }}><b>Capital:</b> {record.description.capital}</p>
                        <p style={{ margin: 0 }}><b>Languages:</b> {
                            record.languages.map((c: any, index) => {
                                let languageList = ""
                                if (index < 1) {
                                    languageList += c.name
                                    index++
                                } else {
                                    languageList += ", " + c.name
                                    index++
                                }
                                return (languageList)
                            })
                        }</p>
                        <p style={{ margin: 0 }}><b>Native:</b> {
                            record.languages.map((c: any, index) => {
                                let languageList = ""
                                if (index < 1) {
                                    languageList += c.native
                                    index++
                                } else {
                                    languageList += ", " + c.native
                                    index++
                                }
                                return (languageList)
                            })
                        }</p>
                        </>,

            }}
            dataSource={dataDTO}
        />
    );
}

export default TableCountries;