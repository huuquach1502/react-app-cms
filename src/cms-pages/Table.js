import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getStockToday, syncDataList } from '../api/listData';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    stt: `${i}`,
    code: `code ${i}`,
    name: `name ${i}`,
    price: `price ${i}`,
    pb: `pb ${i}`,
    pe: `pe ${i}`,
    roe: `roe ${i}`,
    roa: `roa ${i}`,
    khoiluong: `khoiluong ${i}`,
    age: 32,
    address: `address${i}`,
  });
}
const StockTable = () => {
  const columns = [
    {
      title: 'STT',
      width: 100,
      dataIndex: 'stt',
      key: 'stt',
      fixed: 'left',
    },
    {
      title: 'Mã',
      width: 100,
      dataIndex: 'code',
      key: 'code',
      fixed: 'left',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      fixed: 'left',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      width: 150,
    },
    {
      title: 'P/B',
      dataIndex: 'pb',
      key: 'pb',
      width: 150,
    },
    {
      title: 'P/E',
      dataIndex: 'pe',
      key: 'pe',
      width: 150,
    },
    {
      title: 'ROE',
      dataIndex: 'roe',
      key: 'roe',
      width: 150,
    },
    {
      title: 'ROA',
      dataIndex: 'roa',
      key: 'roa',
      width: 150,
    },
    {
      title: 'Khối lượng',
      dataIndex: 'khoiluong',
      key: 'khoiluong',
      width: 150,
    }
  ];
  useEffect(() => {

    function handleSyncDataList(params) {
      console.log("Sync data list", params);
    }
    function handleDataRpgetStock(params) {
      console.log("getStockToday", params);
    }
    // nếu muốn chạy bất đồng bộ ở đây thì a dùng async await, hoặc thủ công thì set timeout cho nó
    syncDataList(handleSyncDataList);
    getStockToday(handleDataRpgetStock);

    return () => {
    }
  }, [])

  return <Table
    title={() => ''}
    footer={false}
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 'calc(100vh - 320px)',
    }}
  />
};
export default StockTable;