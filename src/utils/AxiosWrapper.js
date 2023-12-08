

const AxiosWrapper = {
    login: function(val) {
        console.log("AxiosWrapper has been called.");
        return "real value" + " " + val;
    }
}

export default AxiosWrapper;