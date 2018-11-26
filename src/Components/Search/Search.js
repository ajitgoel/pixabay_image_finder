import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import ImageResults from '../ImageResults/ImageResults';
import axios from 'axios';

const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    }
};

class Search extends Component 
{
    state={
        searchText:'',
        amount:15,
        safeSearch:true,
        apiURL:'https://pixabay.com/api',
        apiKey:'10776017-b594a1346eca93d97742e1656',
        images:[],
    };

    QueryPixaBay=()=>
    {
        let searchTextTemp=this.state.searchText;
        if(searchTextTemp==='')
        {
            this.setState({images:[]});
        }
        else
        {
            let url=`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=${this.state.safeSearch}`;
            console.log(url);
            axios.get(url)
            .then(res=> this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
        }
    }

    onTextChange=(e)=>
    {
        let searchTextTemp=e.target.value;
        this.setState({searchText:searchTextTemp}, ()=> this.QueryPixaBay());
    }
    onAmountChange=(e, index, value)=>
    {
        this.setState({amount:value}, ()=> this.QueryPixaBay());
    }

    OnSafeSearch =(e, isInputChecked)=>
    {
        console.log(isInputChecked);
        this.setState({safeSearch:isInputChecked}, ()=> this.QueryPixaBay());
    }

    render() {
        console.log(this.state.images);
        return (
        <div>
            <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} floatingLabelText="Search for Images" 
            fullWidth={true}/>
            <br/>
            <SelectField floatingLabelText="Frequency" value={this.state.amount} onChange={this.onAmountChange}>
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            <br/>
            <div style={styles.block}>
                <Toggle name="SafeSearch" label="Safe search" style={styles.toggle}  onToggle={this.OnSafeSearch} 
                toggled={this.state.safeSearch}/>
            </div>
            <br/>
            
            {this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
        </div>
    )
  }
}
export default Search;