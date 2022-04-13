import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput,Image  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';
import * as Speech from 'expo-speech';
export default class readfairyStory extends React.Component{

  constructor(props)
  {
    super(props)

    this.state={
      allStories:[],
      dataSource:null,
      search:''
    }
  }
  retrieveStories=()=>{
    try {
      var allStories= []
      var stories = db.collection("fairy-story")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
              
              allStories.push(doc.data())
              console.log('this are the stories',allStories)
          })
          this.setState({allStories})
        })
        
    }
    catch (error) {
      console.log(error);
    }
  };
  componentDidMount=async()=>{
    
    this.retrieveStories();
  }
  SearchFilterFunction=async()=>{
  
    var text = this.state.search.toUpperCase();
    var enterText = text.split('');
  if(enterText[0].toUpperCase()==='T')
    {
      const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
      
    }        
    /*
    if(enterText[0].toUpperCase()==='B')
    {
      const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
      
    }         if(enterText[0].toUpperCase()==='C')
    {
      const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
      
    }         if(enterText[0].toUpperCase()==='D')
    {
      const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
      
    }         if(enterText[0].toUpperCase()==='E')
    {
      const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
      })
      
    }         if(enterText[0].toUpperCase()==='F')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
         if(enterText[0].toUpperCase()==='G')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
     if(enterText[0].toUpperCase()==='H')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='I')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='G')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='K')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
     if(enterText[0].toUpperCase()==='L')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='M')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='N')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
     if(enterText[0].toUpperCase()==='O')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='P')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='Q')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
     if(enterText[0].toUpperCase()==='R')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='S')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='T')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='U')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
     if(enterText[0].toUpperCase()==='V')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='W')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='X')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='Y')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }         if(enterText[0].toUpperCase()==='Z')
     {
       const ref = await db.collection("fairy-story").where('title','==',text).startAfter(this.state. dataSource).limit(10).get()
       ref.docs.map(doc =>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
          dataSource:doc
         })
       })
       
     }
     */
     //console.log(EnteredText)
   }
  
   SearchStories=async(text)=>{
 
    var enterText = text.split('')
  this.setState({
    allStories:[]
  })
  if(enterText[0].toUpperCase() === 'T')
  {
    console.log("Inside Search")
    const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
    ref.docs.map(doc =>{
      this.setState({
        allStories:[...this.state.allStories,doc.data()],
       dataSource:doc
      })
      console.log(this.state.allStories)
    })
   
  
}   
/*
 if(enterText[0].toUpperCase() === 'B')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'C')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'D')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'E')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'F')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'G')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'H')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'I')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'J')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'K')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'L')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'M')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'N')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'O')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'P')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}
    if(enterText[0].toUpperCase() === 'Q')
    {
      console.log("Inside Search")
      const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
      ref.docs.map(doc =>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
         dataSource:doc
        })
        console.log(this.state.allStories)
      })
     
    
  }
  if(enterText[0].toUpperCase() === 'R')
  {
    console.log("Inside Search")
    const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
    ref.docs.map(doc =>{
      this.setState({
        allStories:[...this.state.allStories,doc.data()],
       dataSource:doc
      })
      console.log(this.state.allStories)
    })
   
  
}    if(enterText[0].toUpperCase() === 'S')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'T')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'U')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'V')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'W')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'X')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'Y')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 

}    if(enterText[0].toUpperCase() === 'Z')
{
  console.log("Inside Search")
  const ref = await db.collection("fairy-story").where('title','==',text).limit(10).get()
  ref.docs.map(doc =>{
    this.setState({
      allStories:[...this.state.allStories,doc.data()],
     dataSource:doc
    })
    console.log(this.state.allStories)
  })
 
}
*/
  else if(this.state.dataSource==null &&  this.state.allStories==[])
  {
   this.retrieveStories();
  }

  }
  
  render() {
    return (
      <ScrollView>
        
 <Text style={{fontSize:30,marginTop:10,textAlign:"center",backgroundColor:"purple",color:"white",
 fontWeight:"bold",padding:20}}>
   STORY HUB
   </Text>
   <View>
   <SearchBar
   height={50}
    style={{color:"white"}}
        placeholder="Search the Title "
        onChangeText={(text)=>{
          this.setState({
            search:text
          })
        }}
        value={this.state.search}
        
      />
      <TouchableOpacity style={styles.searchButton} onPress={()=>{
               this.SearchStories(this.state.search)
             }}>
            <Text style={{fontSize:15,textAlign:"center",marginTop:10}}>
              Search
            </Text>
          </TouchableOpacity>
   </View>
   

   <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate("ReadStory")
  }}>
</TouchableOpacity>
      
      
        {this.state.allStories.map((iteam,index)=>{
          return(
               <View style={{borderBottomWidth:10,marginTop:20,borderColor:"purple"}} key={index}>
                
         
              <Text style={{fontSize : 50,fontWeight:"100",marginLeft:10}}>
                {iteam.title}
              </Text>
              <Text style={{fontSize : 30, textDecorationLine: 'underline',marginLeft:10}}>
                {"Author : " + iteam.author}
              </Text>
               
              
              <Text style={{fontSize : 30,fontWeight:"350",marginTop:20,marginLeft:10}}>
         {iteam.story}
       </Text>
            </View>
           
          )
        }   
        )   
      }
        
     <TouchableOpacity onPress={()=>{
     this.props.navigation.navigate("ReadStory")
  }}>
<Image
style = {{width:200 , height:200 }}
source = {require('../assets/back.png')}
/>
</TouchableOpacity>
            
      </ScrollView>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    storybutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      alignSelf: 'center',
      borderRadius:10,
     
    },

    searchButton:{
      borderWidth:1,
      height:50,
      width:60,
      backgroundColor:'yellow',
      marginTop:-49,
      marginLeft:1000,
      borderRadius:10
    },
    speechbutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius:10,
    width:300,
     
    },
   readbutton:
    {
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius:10,
    
      width:200,
     

    }
});