import axiosClient from './axiosClient';
const prefix='friendcomment';


const commentApi = {
    getComments(){
        const url = `/${prefix}`;
        return axiosClient.get(url);
    },
 
}

export default commentApi;