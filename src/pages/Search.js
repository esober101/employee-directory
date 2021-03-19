import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        order: "",
        employees: [{}],
        filteredEmployees: [{}],
    }
    componentDidMount() {
        API.getEmployees()
            .then(res => {
                this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
            })
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const filter = event.target.value;
        const filteredList = this.state.employees.filter(person => {
            let values = Object.values(person).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredEmployees: filteredList })
    }


    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center">Employee Directory</h1>
                    <SearchForm 
                        handleInputChange={this.handleInputChange}/>
                    <SearchResults
                        employees={this.state.filteredEmployees}
                        handleSort={this.handleSort}/>
                </Container>
            </div>
        );
    }
}

export default Search;