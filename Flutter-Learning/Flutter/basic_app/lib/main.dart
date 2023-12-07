import 'package:basic_app/widgets/rounded_button.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:intl/intl.dart';

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

    var emailText = TextEditingController();
    var passwordText = TextEditingController();
    var time = DateTime.now();

    var arrNames = ["Ram", "Payal", "Radhika", "Swati", "Yashtika", "Saika"];
    var colors = [
      Colors.red,
      Colors.blue,
      Colors.green,
      Colors.yellow,
      Colors.purple,
      Colors.orange,
      Colors.pink,
      Colors.brown,
      Colors.cyan,
      Colors.deepPurple,
      Colors.red,
      Colors.blue,
      Colors.green,
      Colors.yellow,
      Colors.purple,
      Colors.orange,
      Colors.pink,
      Colors.brown,
      Colors.cyan,
      Colors.deepPurple,
    ];

     callBackFun(){
      print("Callback function called.");
     }
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
        // body: Center(
        //   child: Column(
        //     mainAxisAlignment: MainAxisAlignment.center,
        //     children: [
        //       Text(
        //         "Shimbhu Kumawat",
        //         style: Theme.of(context).textTheme.displayMedium,
        //       ),
        //       Text(
        //         "Payal Kumawat",
        //         style: Theme.of(context).textTheme.titleSmall,
        //       )
        //     ],
        //   ),
        // ),

        // body: Center(
        //   child: Card(
        //     elevation: 30,
        //     shadowColor: Colors.green,
        //     child:Padding(
        //       padding: const EdgeInsets.all(8.0),
        //       child: Text(
        //           "Shimbhu Kumawat",
        //           style: Theme.of(context).textTheme.displayMedium,
        //         ),
        //     ),
        //   ),
        // ),

        // body:Column(
        //   children: [
        //     Padding(
        //       padding: const EdgeInsets.all(8.0),
        //       child: TextField(
        //         controller: emailText,
        //         decoration: InputDecoration(
        //           border: OutlineInputBorder(
        //           borderRadius: BorderRadius.circular(20),
        //           borderSide: BorderSide(color: Colors.yellow,width: 6),
        //           ),
        //           hintText: "Enter your Email.",
        //           focusedBorder: OutlineInputBorder(
        //             borderRadius: BorderRadius.circular(20),
        //             borderSide: BorderSide(color: Colors.blue,width: 2),
        //           ),
        //           prefixIcon: Icon(Icons.email,color: Colors.blue,)
        //         ),
        //       ),
        //     ),

        //     Padding(
        //       padding: const EdgeInsets.all(8.0),
        //       child: TextField(
        //         controller: passwordText,
        //         obscureText: true,
        //         decoration: InputDecoration(
        //           border: OutlineInputBorder(
        //           borderRadius: BorderRadius.circular(20),
        //           borderSide: BorderSide(color: Colors.green,width: 6),
        //           ),
        //           hintText: "Enter your password.",
        //           focusedBorder: OutlineInputBorder(
        //             borderRadius: BorderRadius.circular(20),
        //             borderSide: BorderSide(color: Colors.brown,width: 2),
        //           ),
        //            prefixIcon: Icon(Icons.password,color: Colors.blue,)
        //         ),
        //       ),
        //     ),
        //     ElevatedButton(onPressed: (){
        //       var email = emailText.text;
        //       var password = passwordText.text;
        //        print("email : $email");
        //         print("password : $password");
        //     }, child: Text("Sign In"))
        //   ],
        // )

        // body: Center(
        //   child: Container(
        //     width: 400,
        //     height: 400,
        //     color: Colors.lightBlue,
        //     child: Column(
        //       mainAxisAlignment: MainAxisAlignment.center,
        //       crossAxisAlignment: CrossAxisAlignment.center,
        //       children: [
        //         Text("Current Time : $time ",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
        //         ElevatedButton(onPressed: (){
        //         setState(() {
                  
        //         });
        //         }, child: Text("Get Current Time")),
        //       ]
        //       )
        //   ,)),
        // body: Center(
        //   child: Container(
        //     width: 600,
        //     height: 600,
        //     color: Colors.lightBlue,
        //     child: Column(
        //       mainAxisAlignment: MainAxisAlignment.center,
        //       crossAxisAlignment: CrossAxisAlignment.center,
        //       children: [
        //         Text("Current Time : ${DateFormat("Hms").format(time)} ",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
        //         Text("Current Time : ${DateFormat("jms").format(time)} ",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
        //         Text("Current Date : ${DateFormat("yMMMMd").format(time)} ",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),),
        //         ElevatedButton(onPressed: (){
        //         setState(() {
                  
        //         });
        //         }, child: Text("Get Current Time")),
        //       ]
        //       )
        //   ,)),
        // body: Center(
        //   child: Container(
        //     width: 600,
        //     height: 600,
        //     color: Colors.lightBlue,
        //     child: Column(
        //       mainAxisAlignment: MainAxisAlignment.center,
        //       crossAxisAlignment: CrossAxisAlignment.center,
        //       children: [
        //         ElevatedButton(
        //           onPressed: () async{
        //          DateTime? datepicked = await showDatePicker(
        //           context: context, 
        //           initialDate: DateTime.now(), 
        //           firstDate: DateTime(2020), 
        //           lastDate: DateTime(2024));
        //           if(datepicked!=null)
        //           {
        //             print("Selected Date : $datepicked");
        //           }
        //         },
        //          child: Text("Select Date")),

        //          ElevatedButton(
        //           onPressed: () async{
        //           TimeOfDay? timepicked = await showTimePicker(context: context, initialTime: TimeOfDay.now(),initialEntryMode: TimePickerEntryMode.input);

        //           if(timepicked!=null)
        //           {
        //             print("Selected Time : ${timepicked.hour} : ${timepicked.minute}");
        //           }
        //         },
        //          child: Text("Select Time")), 
        //       ]
        //       )
        //   ,)),

        // body:GridView.count(crossAxisCount: 4,
        // crossAxisSpacing: 10,
        // mainAxisSpacing: 10,
        // children: [
        //   Container(color: colors[0],),
        //   Container(color: colors[1],),
        //   Container(color: colors[2],),
        //   Container(color: colors[3],),
        //   Container(color: colors[4],),
        //   Container(color: colors[5],),
        //   Container(color: colors[6],),
        //   Container(color: colors[7],),
        //   Container(color: colors[8],),
        //   Container(color: colors[9],),

        // ],)

        //  body:GridView.extent(maxCrossAxisExtent: 200,
        // crossAxisSpacing: 10,
        // mainAxisSpacing: 10,
        // children: [
        //   Container(color: colors[0],),
        //   Container(color: colors[1],),
        //   Container(color: colors[2],),
        //   Container(color: colors[3],),
        //   Container(color: colors[4],),
        //   Container(color: colors[5],),
        //   Container(color: colors[6],),
        //   Container(color: colors[7],),
        //   Container(color: colors[8],),
        //   Container(color: colors[9],),

        // ],)

        //  body:GridView.builder(
        //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4,crossAxisSpacing: 20,mainAxisSpacing: 20),
        //   itemCount: colors.length,
        //   itemBuilder:(context,index){
        //   return Container(color: colors[index],);
        //  })

        //  body:GridView.builder(
        //   gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 200,crossAxisSpacing: 20,mainAxisSpacing: 20),
        //   itemCount: colors.length,
        //   itemBuilder:(context,index){
        //   return Container(color: colors[index],);
        //  })

        // Callback function

        // body: ElevatedButton(
        //   child: Text("Press here!"),
        //   onPressed: callBackFun,
        // ),


        // Custom Widget

//        body: Column(
//   children: [
    
//     horizontalScroll(),
//     VerticalScroll(),
//     Expanded(flex: 1, child: Container(color: Colors.purple)),
//     Expanded(flex: 3, child: Container(color: Colors.pink)),
//   ],
// ),

    // body: Stack(
    //   children: [
    //     Container(width: 600,height: 600,color: Colors.blue,),
    //     Container(width: 400,height: 400,color: Colors.purple,),
    //     Container(width: 200,height: 200,color: Colors.green,),
    //   ],
    // ),

    // body: Container(
    //   width: 1000,
    //   height: 1000,
    //   color: Colors.green,
    //   child: Stack(
    //     children: [
    //       Container(width: 400,height: 400,color: Colors.blue,child: Text("Shimbhu",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.white),)),
    //       Positioned(top: 50,left: 50,child: Container(width: 400,height: 400,color: Colors.purple,child: Text("Payal",style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold,color: Colors.white),))),
    //       // Container(width: 200,height: 200,color: Colors.green,),
    //     ],
    //   ),
    // ),

//     body: Column(
//       mainAxisAlignment: MainAxisAlignment.center,
//       children: [
//         Container(
//           width: 200,
//           height: 100,
//           child: RoundedButton(
//             btnName:"payal",
//             icon: Icon(Icons.lock),
//             callback: () {
//               print("button pressed.");
//             },
//             textStyle: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.brown),
//             color: Colors.yellow,
//             ),
//         ),
//         Container(height: 100,),
//         Container(
//           width: 200,
//           height: 100,
//           child: RoundedButton(
//             btnName:"Shimbhu",
//             icon: Icon(Icons.play_arrow),
//             callback: () {
//               print("button 2 pressed.");
//             },
//             textStyle: TextStyle(fontSize: 20,fontWeight: FontWeight.bold,color: Colors.white),
//             color: Colors.lightBlue,
//             ),
//         ),
//       ],
//     ),

        // body:Container(
        //   color: Colors.grey,
        //   child: Wrap(
        //       direction: Axis.horizontal,
        //       alignment: WrapAlignment.spaceEvenly,
        //       spacing: 20,
        //       runSpacing: 50,
        //       children: [
        //         Container(width: 200,height: 200,color: colors[0],),
        //         Container(width: 200,height: 200,color: colors[1],),
        //         Container(width: 200,height: 200,color: colors[2],),
        //         Container(width: 200,height: 200,color: colors[3],),
        //         Container(width: 200,height: 200,color: colors[4],),
        //         Container(width: 200,height: 200,color: colors[5],),
        //         Container(width: 200,height: 200,color: colors[6],),
        //         Container(width: 200,height: 200,color: colors[7],),
        //         Container(width: 200,height: 200,color: colors[8],),
        //         Container(width: 200,height: 200,color: colors[9],),
        //       ],
        //     ),
        // ),


      // body: Center(
        
      //   child:ConstrainedBox
      //   (constraints: BoxConstraints(maxHeight: 500,maxWidth: 800,minHeight: 100,minWidth: 300),
      //   child: SizedBox(width:200,height: 50,
      //   child: ElevatedButton(onPressed: (){

      //   },
      //   child: Text("ShimbhuAI",style: TextStyle(color: Colors.purple,fontSize: 40),),
      //   ),),)
      //   ),  

      // body: Center(
      //   child:ConstrainedBox
      //   (constraints: BoxConstraints(maxHeight: 500,maxWidth: 800,minHeight: 100,minWidth: 300),
      //   child: SizedBox.expand(
      //   child: ElevatedButton(onPressed: (){

      //   },
      //   child: Text("ShimbhuAI",style: TextStyle(color: Colors.purple,fontSize: 40),),
      //   ),),)
      //   ),

      // body: Center(
      //   child:ConstrainedBox
      //   (constraints: BoxConstraints(maxHeight: 500,maxWidth: 800,minHeight: 100,minWidth: 300),
      //   child: SizedBox.shrink(
      //   child: ElevatedButton(onPressed: (){

      //   },
      //   child: Text("ShimbhuAI",style: TextStyle(color: Colors.purple,fontSize: 40),),
      //   ),),)
      //   ),

      body: Center(
        child:ConstrainedBox
        (constraints: BoxConstraints(maxHeight: 500,maxWidth: 800,minHeight: 100,minWidth: 300),
        child: SizedBox.square(dimension: 200,
        child: ElevatedButton(onPressed: (){

        },
        child: Text("ShimbhuAI",style: TextStyle(color: Colors.purple,fontSize: 40),),
        ),),)
        ),
    );
  }
}



// class VerticalScroll extends StatelessWidget
// {
//   var colors = [
//       Colors.red,
//       Colors.blue,
//       Colors.green,
//       Colors.yellow,
//       Colors.purple,
//       Colors.orange,
//       Colors.pink,
//       Colors.brown,
//       Colors.cyan,
//       Colors.deepPurple,
//       Colors.red,
//       Colors.blue,
//       Colors.green,
//       Colors.yellow,
//       Colors.purple,
//       Colors.orange,
//       Colors.pink,
//       Colors.brown,
//       Colors.cyan,
//       Colors.deepPurple,
//     ];

//   @override
//   Widget build(BuildContext context) {
//     return Expanded(flex: 2, child: Container(color: Colors.green,child: ListView.builder(
//           itemBuilder: (context, index) {
//             return Padding(
//               padding: const EdgeInsets.all(8.0),
//               child: SizedBox(
//                 width: 100,
//                 child: CircleAvatar(backgroundColor: colors[index]),
//               ),
//             );
//           },
//           itemCount: colors.length,
//           scrollDirection: Axis.vertical,
//         ),));
//   }

// }


// class horizontalScroll extends StatelessWidget
// {
//   var colors = [
//       Colors.red,
//       Colors.blue,
//       Colors.green,
//       Colors.yellow,
//       Colors.purple,
//       Colors.orange,
//       Colors.pink,
//       Colors.brown,
//       Colors.cyan,
//       Colors.deepPurple,
//       Colors.red,
//       Colors.blue,
//       Colors.green,
//       Colors.yellow,
//       Colors.purple,
//       Colors.orange,
//       Colors.pink,
//       Colors.brown,
//       Colors.cyan,
//       Colors.deepPurple,
//     ];

//   @override
//   Widget build(BuildContext context) {
//     return Expanded(flex: 2, child: Container(color: Colors.cyan,child: ListView.builder(
//           itemBuilder: (context, index) {
//             return Padding(
//               padding: const EdgeInsets.all(8.0),
//               child: SizedBox(
//                 width: 100,
//                 child: CircleAvatar(backgroundColor: colors[index]),
//               ),
//             );
//           },
//           itemCount: colors.length,
//           scrollDirection: Axis.horizontal,
//         ),));
//   }

// }

