import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer T9Fova8q2pPtj6jnoBeUSaJ75fhAN8JSZry7_ztf6u42l0SOus0zPJLpgByB7Gf_fGNAWPJul-BbNCu-eMvOIyZfSYqDhYEBTjnhSpi5v0kjybXyEFoDwnQtmsJZYHYx'
    }
});

