import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        obj: [{
            "lat": 51.534986099999998,
            "lng": -0.11123330000000001,
            "caption": "User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job 1",
            "link": "https:\/\/greenkey.ru",
            "salary": "\u00a325,000 - \u00a350,000 per year<\/span>",
            "text": "We're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acrosWe're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros",
            "id": 1,
            "name": "Uber 1"
        }, {
            "lat": 51.538786099999996,
            "lng": -0.17683330000000003,
            "caption": "User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job 2",
            "link": "https:\/\/greenkey.ru",
            "salary": "\u00a325,000 - \u00a350,000 per year<\/span>",
            "text": "We're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acrosWe're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros",
            "id": 2,
            "name": "Uber 2"
        }, {
            "lat": 51.529086100000001,
            "lng": -0.097133300000000006,
            "caption": "User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job 3",
            "link": "https:\/\/greenkey.ru",
            "salary": "\u00a325,000 - \u00a350,000 per year<\/span>",
            "text": "We're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acrosWe're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros",
            "id": 3,
            "name": "Uber 3"
        }, {
            "lat": 51.538586099999996,
            "lng": -0.13163330000000001,
            "caption": "User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job 4",
            "link": "https:\/\/greenkey.ru",
            "salary": "\u00a325,000 - \u00a350,000 per year<\/span>",
            "text": "We're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acrosWe're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros",
            "id": 4,
            "name": "Uber 4"
        }, {
            "lat": 51.5401861,
            "lng": -0.11363330000000001,
            "caption": "User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job 5",
            "link": "https:\/\/greenkey.ru",
            "salary": "\u00a325,000 - \u00a350,000 per year<\/span>",
            "text": "We're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acrosWe're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros",
            "id": 5,
            "name": "Uber 5"
        }, {
            "lat": 51.525786099999998,
            "lng": -0.16263330000000001,
            "caption": "User Interface & User Experience Designer for full-time job job User Interface & User Experience Designer for full-time job 500",
            "link": "https:\/\/greenkey.ru",
            "salary": "\u00a325,000 - \u00a350,000 per year<\/span>",
            "text": "We're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acrosWe're on the look out for a creative, UI\/UX Designer to join our talented,growing team to help develop brands and work with exciting clients acros",
            "id": 500,
            "name": "Uber 500"
        }
        ]

    },
    mutations: {},
    actions: {
        fetchData() {

        }
    },
    getters: {
        obj: s => s.obj
    }
});
