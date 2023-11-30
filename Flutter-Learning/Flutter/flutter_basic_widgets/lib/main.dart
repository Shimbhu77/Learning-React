import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Shimbhu'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body:OutlinedButton(
        child: Text("outlined Watch Here!"),
        onPressed: (){
          print("Start Playing Song in outlined.");
        },
        onLongPress: (){
          print("Select Delete Items in outlined");
        },
        )
      //  body:ElevatedButton(
      //   child: Text("Elevated Watch Here!"),
      //   onPressed: (){
      //     print("Start Playing Song in Elevated.");
      //   },
      //   onLongPress: (){
      //     print("Select Delete Items in Elevated");
      //   },
      //   )
      // body:TextButton(
      //   child: Text("Watch Here!"),
      //   onPressed: (){
      //     print("Start Playing Song.");
      //   },
      //   onLongPress: (){
      //     print("Select Delete Items");
      //   },
      //   )
     
      
    );
  }
}
