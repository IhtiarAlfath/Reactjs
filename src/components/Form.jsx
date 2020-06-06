import React, { Component } from 'react'
import $ from 'jquery';

export class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            umur: '',
            jk: '',
            alamat: '',
            hobby: [],
        }   
    }

    handleNamaChange = (event) => {
        this.setState({
            nama: event.target.value,
        })
    }

    handleUmurChange = (event) => {
        this.setState({
            umur: event.target.value,
        })
    }

    handlejkChange = (event) => {
        this.setState({
            jk: event.target.value
        })
    }

    handleAlamatChange = (event) => {
        this.setState({
            alamat: event.target.value
        })
    }

    handleHobbyChange = (event) => {
        let arr;
        if(event.target.checked){
            if(event.target.value ==1){
                arr="Belajar"
            }
            if(event.target.value ==2){
                arr="Membaca"
            }
            if(event.target.value ==3){
                arr="Bermain"
            }
            if(event.target.value ==4){
                arr="Berkhayal"
            }
            this.state.hobby[event.target.value] = arr;
        }
        else{
            this.state.hobby[event.target.value] = "";
        }
    }


    handleSubmit = event => {
        if((this.state.nama != "") && (this.state.umur !="") && (this.state.jk != "") && (this.state.alamat != "")){
            $('#result').html(
                `<p> Nama ${this.state.nama}, Umur ${this.state.umur} tahun, Jenis Kelamin ${this.state.jk}, Alamat ${this.state.alamat}, Hobby ${this.state.hobby.join(" ")}</p>`
            );
            $('.alert').remove();
        }

        if(this.state.nama == ""){
            $('#nama').append(`<div class="alert" role="alert" style="color:red">
            Nama belum di isi!
          </div>
          `)
        }
        if(this.state.umur == ""){
            $('#umur').append(`<div class="alert" role="alert" style="color:red">
            Umur belum di isi!
          </div>
          `)
        }
        if(this.state.jk == ""){
            $('#jk').append(`<div class="alert" role="alert" style="color:red">
            Jenis kelamin  belum di isi!
          </div>
          `)
        }
        if(this.state.alamat == ""){
            $('#alamat').append(`<div class="alert" role="alert" style="color:red">
            Alamat belum di isi!
          </div>
          `)
        }
        event.preventDefault();
    }

    handleAlert = () => {
            $('.alert').remove()
    }

    render() {
        const { nama, umur, jk, alamat, hobby} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form</h1>
                    <div>
                            <label>Nama: </label>
                            <input type="text" placeholder="Nama" value={nama} onChange={this.handleNamaChange} />
                    </div>
                    <div id = "nama"></div>

                    <div>
                        <label>Umur: </label>
                        <input type="number" placeholder="Umur" value={umur} onChange={this.handleUmurChange} />
                    </div>
                    <div id = "umur"></div>

                    <div>
                        <label>Jenis Kelamin:</label>
                            <input type="radio" value="Pria" name="Pria" checked={jk === "Pria"} onChange={this.handlejkChange} />Pria
                        
                            <input type="radio" value="Wanita" name="Wanita" checked={jk === "Wanita"} onChange={this.handlejkChange} />Wanita
                    </div>
                    <div id = "jk"></div>

                    <div>
                        <label>Alamat: </label>
                        <textarea value={alamat} onChange={this.handleAlamatChange}></textarea>
                        <div style={{fontSize: 12, color: "red"}}>{this.state.erroralamat}</div>
                    </div>
                    <div id = "alamat"></div>

                    <div>
                        <label>Hobby: </label>
                            <input type="checkbox" name="Belajar" value="1" onChange={this.handleHobbyChange} />
                            Belajar
                            <input type="checkbox" name="membaca" value="2" onChange={this.handleHobbyChange} />
                            Membaca
                            <input type="checkbox" name="Bermain" value="3" onChange={this.handleHobbyChange} />
                            Bermain
                            <input type="checkbox" name="Berkhayal" value="4" onChange={this.handleHobbyChange} />
                            Berkhayal
                    </div>

                    <button type="submit" onClick={this.handleAlert}>Submit</button>
                    
                </form>

                <h3>Result:</h3>
                <p id = "result"></p>

            </div>
        )
    }
}

export default Form