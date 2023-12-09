import 'package:flutter/material.dart';

class MapList extends StatefulWidget
{
  @override
  State<MapList> createState(){
   return MapListState();
  }
}

class MapListState extends State<MapList>
{

  var list = [
    {
       "name":"Shimbhu",
       "phone":"1234567890",
       "calls":"4"
    },
    {
       "name":"Payal",
       "phone":"1234567890",
       "calls":"2"
    },
    {
       "name":"Vijendra",
       "phone":"1234567890",
       "calls":"3"
    },
    {
       "name":"Mother",
       "phone":"1234567890",
       "calls":"2"
    }
  ];
  Widget build(BuildContext context)
  {
    return Scaffold(
      appBar: AppBar(title: Text("Shimbhu's App")),
      body: ListView(
        children: list.map((value) {
          return ListTile(
               leading: Icon(Icons.account_circle),
               title: Text(value["name"].toString()),
               subtitle: Text(value["phone"].toString()),
               trailing: CircleAvatar(child: Text(value["calls"].toString())),
          );
        }).toList(),
      ),
    );
  }
}