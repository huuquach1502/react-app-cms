import HttpInstance from "../services/AxiosInstance";

const syncDataList = (handleDataRp) => {
    HttpInstance()
        .get('/sync')
        .then((res) => {
            if (res.data) {
                handleDataRp(res?.data);
            }

        }).catch((err) => {
            handleDataRp(err?.response);
        });
}


const getStockToday = (handleDataRp) => {
    HttpInstance()
        .get('/cim')
        .then((res) => {
            if (res.data) {
                handleDataRp(res?.data);
            }

        }).catch((err) => {
            handleDataRp(err?.response);
        });
}
export {
    syncDataList,
    getStockToday
};

