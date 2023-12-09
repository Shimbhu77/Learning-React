import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main()
{
  return runApp(MyApp());
}

class MyApp extends StatelessWidget
{
  @override
  Widget build(BuildContext cntext)
  {
     return MaterialApp(
      title: "Shimbhu's App",
      theme: ThemeData(primarySwatch: Colors.blue),
      home: BMIPage(),
     );
  }
}


class BMIPage extends StatefulWidget
{
  @override
  State<BMIPage> createState(){
    return BMIPageState();
  }
}

class BMIPageState extends State<BMIPage>
{

  var weightController = TextEditingController();
  var heightController = TextEditingController();
  var inchController = TextEditingController();
  var result ="";
  var bgColor;
  var msg = "";


  @override
  Widget build(BuildContext context)
  {
     return Scaffold(
      // appBar: AppBar(title: Text("BMI Application")),
      body: Container(
        color: bgColor,
        child: Center(
          child: Container(
            color: Colors.green.shade200,
            width: 600,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("BMI Calculator",style: TextStyle(fontSize: 30,fontStyle: FontStyle.italic,fontWeight: FontWeight.w600,color: Colors.pink.shade400),),
                SizedBox(height: 20,),
                TextField(
                  controller: weightController,
                  decoration: InputDecoration(
                    label: Text("Enter Your Weight here (Kg)"),
                    prefixIcon: Icon(Icons.line_weight),
                  ),
                  keyboardType: TextInputType.number,
                ),
                TextField(
                  controller: heightController,
                  decoration: InputDecoration(
                    label: Text("Enter Your Height in Feet"),
                    prefixIcon: Icon(Icons.height),
                  ),
                  keyboardType: TextInputType.number,
                ),
                TextField(
                  controller: inchController,
                  decoration: InputDecoration(
                    label: Text("Enter Your Height in Inch"),
                    prefixIcon: Icon(Icons.height),
                  ),
                  keyboardType: TextInputType.number,
                ),
                SizedBox(height: 20,),
                ElevatedButton(onPressed: (){

                  var Weight = weightController.text.toString();
                  var heightInFeet = heightController.text.toString();
                  var heightInInch = inchController.text.toString();

                  if(Weight!="" && heightInFeet!="" && heightInInch!="")
                  {
                        var wt = int.parse(Weight);
                        var ft = int.parse(heightInFeet);
                        var inch = int.parse(heightInInch);

                        var tInch = (ft*12)+inch;
                        var tM = (tInch*2.54)/100;

                        var bmi = wt/(tM*tM);

                        print("bmi is : $bmi");

                        result = "Your BMI index is ${bmi.toStringAsFixed(2)}.";

                        if(bmi > 25)
                        {
                          bgColor = Colors.red.shade300;
                          msg = "You are Over weight";
                        }
                        else if(bmi < 18)
                        {
                           bgColor = Colors.orange.shade300;
                           msg = "You are under weight";
                        }
                        else
                        {
                           bgColor = Colors.green.shade300;
                           msg = "You are healthy.";
                        }

                        setState(() {
                          
                        });


                  }
                  else
                  {
                        result="Please Fill all the deatils";
                        setState(() {
                          
                        });
                  }
      
                }, child: Text("Calculate BMI",style: TextStyle(fontSize: 30,fontWeight: FontWeight.w500,color: Colors.grey.shade300),)),
                SizedBox(height: 10,),
                Text("$result",style: TextStyle(fontSize: 30,fontWeight: FontWeight.w500,color: Colors.purple.shade400),),
                SizedBox(height: 10,),
                Text("$msg",style: TextStyle(fontSize: 30,fontWeight: FontWeight.w500,color: Colors.purple.shade400),),
              ],
            ),
          ),
        ),
      ),
     );
  }
}