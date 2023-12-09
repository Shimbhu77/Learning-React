
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SharedPref extends StatefulWidget
{
  @override
  State<SharedPref> createState(){
    return SharedPrefState();
  }
}

class SharedPrefState extends State<SharedPref>
{
  var nameController = TextEditingController();
  var name = "No Value Saved";

  @override
  void initState() {
    super.initState();
    getValue();
  }
  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
      appBar: AppBar(title: Text("Shimbhu's App"),),
      body: Center(
        child: Container(
          width: 600,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextField(
                controller: nameController,
                // decoration: BoxDecoration(borderRadius: BorderRadius.circular(20),boxShadow: Colors.blue),
              ),
              SizedBox(height: 10,),
              ElevatedButton(onPressed: () async{

                // var prefs = await SharedPreferences.getInstance();
                // Obtain shared preferences.
                final SharedPreferences prefs = await SharedPreferences.getInstance();
                prefs.setString("name", nameController.text.toString());

                print("name ${nameController.text.toString()}");
      
              }, child: Text("Save",style: TextStyle(fontSize: 30,color: Colors.purple),)),
              SizedBox(height: 15,),
              Text("$name",style: TextStyle(fontSize: 30,fontStyle: FontStyle.italic,color: Colors.green),)
            ],
          ),
        ),
      ),
    );
  }

  void getValue() async
  {
       var prefs = await SharedPreferences.getInstance();
       var getName = prefs.getString("name");
       name = getName ??"No value Saved";
       setState(() {
         
       });
  }
}