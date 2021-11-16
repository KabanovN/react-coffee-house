import './app.scss';

import { Component } from 'react';
import AppHeader from "../app-header/app-header";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";
import AppList from "../app-list/app-list";
import AppFooter from '../app-footer/app-footer';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1},
            {title: 'AROMA Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2},
            {title: 'Lavazza Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3},
            {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4},
            {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5},
            {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 6},
         ],
         term: '',
         filter: 'all'
      }
   }

   searchItem = (elem, items) => {
      if (items.length === 0) {
         return items;
      }

      return items.filter(item => item.title.indexOf(elem) > -1);
   }

   filterItems = (items, filter) => {
      switch (filter) {
         case 'Brazil': 
            return items.filter(item => item.country === 'Brazil');
         case 'Kenya':
            return items.filter(item => item.country === 'Kenya');
         case 'Columbia':
            return items.filter(item => item.country === 'Columbia');
         default:
            return items;
      }
   }

   onUpdateTerm = (term) => {
      this.setState({term});
   }

   onFilterSelect = (filter) => {
      this.setState({filter});
   }

   render() {
      const {data, term, filter} = this.state;
      const visibleData = this.filterItems(this.searchItem(term, data), filter);

      return (
         <div className="app">
            <AppHeader/>
            <main>
               <AppInfo/>
               <section className="app__goods">
                  <div className="app__sort">
                     <SearchPanel term={term} onUpdateTerm={this.onUpdateTerm}/>
                     <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
                  </div>
                  <AppList data={visibleData}/>
               </section>
            </main>
            <AppFooter/>
         </div>
      )
   }
};

export default App;