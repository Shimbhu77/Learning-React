// import 'package:flutter/material.dart';
import 'package:flutter/material.dart';

void main()
{
  return runApp(MyApp());
}

class MyApp extends StatelessWidget
{
  @override
  Widget build(BuildContext context)
  {
     return MaterialApp(
      title: "Shimbhu's App",
      theme: ThemeData(primarySwatch: Colors.blueGrey),
      home: MyHomePage(),
     );
  }
}

class MyHomePage extends StatefulWidget
{
  @override
  State<MyHomePage> createState() {
    return MyHomePageState();
  }
}

class MyHomePageState extends State<MyHomePage>
{
  var number1 = TextEditingController();
  var number2 = TextEditingController();
  var num1;
  var num2;
  var result=0.0;

  @override
  Widget build(BuildContext context)
  {
    return Scaffold(
      appBar: AppBar(
        title: Text("SP"),
      ),
      body: Center(
        child: Container(
          width: 800,
          height: 500,
          color: Colors.blue.shade100,
          child: Column(
            children: [
              Center(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text("SP Calculater",style: TextStyle(fontSize: 40,fontWeight: FontWeight.bold,fontStyle: FontStyle.italic,color: Colors.purple),),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextField(
                  controller: number1,
                  keyboardType: TextInputType.number,
                ),
              ),
              SizedBox(height: 20,),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: TextField(
                  controller: number2,
                  keyboardType: TextInputType.number,
                ),
              ),
              Wrap(
                children: [Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  // spacin
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: ElevatedButton(style: ElevatedButton.styleFrom(fixedSize: Size(120, 50)),onPressed: (){
                        num1 = int.parse(number1.text.toString());
                        num2 = int.parse(number2.text.toString());
                        result = num1+num2;
                        print("result : $result");
                        setState(() {
                          print("Rebuilding function again.");
                        });
                            
                      }, child: Text("Add",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),)),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: ElevatedButton(style: ElevatedButton.styleFrom(fixedSize: Size(120, 50)),onPressed: (){
                        num1 = int.parse(number1.text.toString());
                        num2 = int.parse(number2.text.toString());
                        result = num1-num2;
                        print("result : $result");
                        setState(() {
                          print("Rebuilding function again.");
                        });
                            
                      }, child: Text("Sub",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),)),
                    ),
                      
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: ElevatedButton(style: ElevatedButton.styleFrom(fixedSize: Size(120, 50)),onPressed: (){
                        num1 = int.parse(number1.text.toString());
                        num2 = int.parse(number2.text.toString());
                        result = num1*num2;
                        print("result : ${result.toStringAsFixed(2)}");
                        setState(() {
                          print("Rebuilding function again.");
                        });
                            
                      }, child: Text("Mul",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),)),
                    ),
                      
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: ElevatedButton(style: ElevatedButton.styleFrom(fixedSize: Size(120, 50)),onPressed: (){
                        num1 = int.parse(number1.text.toString());
                        num2 = int.parse(number2.text.toString());
                        result = num1/num2;
                        print("result : $result");
                        setState(() {
                          print("Rebuilding function again.");
                        });
                            
                      }, child: Text("Div",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold),)),
                    ),
                  ],
                ),
                ]
              ),
              SizedBox(height: 20,),

              //  Center(
              //   child: Padding(
              //     padding: const EdgeInsets.all(8.0),
              //     child: Text("Number $number1 and Number $number2 Operation Result : $result ",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold,fontStyle: FontStyle.italic,color: Colors.green),),
              //   ),
              // ),
              Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text("Result : ${result.toStringAsFixed(2)}",style: TextStyle(fontSize: 25,fontWeight: FontWeight.bold,fontStyle: FontStyle.italic,color: Colors.green),),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

