import React from "react";

export default class HigherOrderComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ], filterUsingUserType:[], filterUsingUserFirstLetter:[], filterUsingAge:[], totalYears:0
        }

        let filteredData = this.state.userData.filter((el,i,arr)=>el.user_type === "Designer")

        let ChangeName = this.state.userData.filter((el,i,arr)=> el.name.startsWith('J'))

        let ChangeAge = this.state.userData.filter((el,i,arr)=> el.age > 28 && el.age <= 50)

        let total = this.state.userData.filter((el)=> el.user_type=="Designer").reduce((acc,el,i,arr)=>{
            return acc+el.years
        },0)
         


        this.state.filterUsingUserType = filteredData
        this.state.filterUsingUserFirstLetter = ChangeName
        this.state.filterUsingAge = ChangeAge
        this.state.totalYears = total
    }

    render(){

        let myStyle = {
            width: "600px",
            border:"2px solid black",
            textAlign:"center",
            color:"blue",
            marginLeft:"16%"
        }

        let myElement = {
            display:"flex",
            paddingLeft:"15px",
            fontSize:"15px"
        }

        return(
            <>
               <h1 style={{fontSize:"30px"}}>Display all items</h1>
                <div style={myStyle}>
                {this.state.userData.map((el,i,arr)=>(
                    <div key={el.id} style={myElement}>
                        <p style={myElement}>Id: {el.id}</p>
                        <p style={myElement}>Name: {el.name}</p>
                        <p style={myElement}>UserType: {el.user_type}</p>
                    </div>
                ))}
                </div>

                <h1 style={{fontSize:"30px"}}>Display Using User Type</h1>
                <div style={myStyle}>
                {this.state.filterUsingUserType.map((el,i,arr)=>(
                    <div key={el.id} style={myElement}>
                        <p style={myElement}>Id: {el.id}</p>
                        <p style={myElement}>Name: {el.name}</p>
                        <p style={myElement}>UserType: {el.user_type}</p>

                    </div>
                ))}
                </div>

                <h1 style={{fontSize:"30px"}}>Filter Using First Letter J</h1>
                <div style={myStyle}>
                {this.state.filterUsingUserFirstLetter.map((el,i,arr)=>(
                    <div key={el.id} style={myElement}>
                        <p style={myElement}>Id: {el.id}</p>
                        <p style={myElement}>Name: {el.name}</p>
                        <p style={myElement}>UserType: {el.user_type}</p>

                    </div>
                ))}
                </div>

                <h1 style={{fontSize:"30px"}}>Filter based on age greater than 28 and less than equal to 50</h1>
                <div style={myStyle}>
                {this.state.filterUsingUserFirstLetter.map((el,i,arr)=>(
                    <div key={el.id} style={myElement}>
                        <p style={myElement}>Id: {el.id}</p>
                        <p style={myElement}>Name: {el.name}</p>
                        <p style={myElement}>UserType: {el.user_type}</p>

                    </div>
                ))}
                </div>

                <h1 style={{fontSize:"30px"}}>Find the total years of Designers</h1>
                <p style={{width: "600px", border:"2px solid black", marginLeft:"16%"}}>{this.state.totalYears}</p>

            </>
        )
    }
}