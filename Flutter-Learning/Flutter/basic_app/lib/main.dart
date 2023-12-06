import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

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
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: TextTheme(
          displayMedium: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.cyan),
          titleSmall: TextStyle(fontSize: 50,fontWeight: FontWeight.bold,color: Colors.purple)
        )
        // colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        // useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Shimbhu'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.

    var arrNames = ["Ram", "Payal", "Radhika", "Swati", "Yashtika", "Saika"];
    return Scaffold(
        appBar: AppBar(
          // TRY THIS: Try changing the color here to a specific color (to
          // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
          // change color while the other colors stay the same.
          // backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          // Here we take the value from the MyHomePage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text(widget.title),
        ),

        // body:Center(
        //   child: CircleAvatar(
        //     child: Container(
        //       width: 400,
        //       height: 400,
        //       color: Colors.cyan,),

        //   )
        // ,)

        // body:Center(
        //   child: CircleAvatar(
        //     child: Text("SK",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.white),),
        //     backgroundColor: Colors.blue,
        //     radius: 40,
        //   )
        // ,)

        // body:Center(child: Text("Shimbhu Kumawat",style: TextStyle(fontSize: 30,fontFamily: 'RubikFamily'),),)
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Shimbhu Kumawat",
                style: Theme.of(context).textTheme.displayMedium,
              ),
              Text(
                "Payal Kumawat",
                style: Theme.of(context).textTheme.titleSmall,
              )
            ],
          ),
        ));
  }
}
