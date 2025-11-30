import Header from "./components/header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetial from "./components/CityDetail.js";

import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    startIdx: 0,
    sortBy: "",
    searchWorld: "",
    region: "",
    cities: "",
  };

  const hedaer = new Header();
  const regionList = new RegionList();
  const cityList = new CityList({
    $app,
    initialState: this.state.cities,
    handleLoadMore: async () => {
      const newStartIdx = this.state.startIdx + 40;
      const newCities = await request(
        newStartIdx,
        this.state.region,
        this.state.sortBy,
        this.state.searchWorld
      );
      this.setState({
        ...this.setState,
        startIdx: newStartIdx,
        cities: {
          cities: [...this.state.cities, ...newCities.cities],
          isEnd: newCities.isEnd,
        },
      });
    },
  });
  const cityDetail = new CityDetial();

  this.setState = (newState) => {
    this.state = newState;
    cityList.setState(this.state.cities);
  };

  const init = async () => {
    const cities = await request(
      this.state.startIdx,
      this.state.region,
      this.state.sortBy,
      this.state.searchWorld
    );
    this.setState({
      ...this.state,
      cities: cities,
    });
  };

  init();
}
