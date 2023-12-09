
import 'package:flutter/material.dart';

class RangeSliderPage extends StatefulWidget
{

  @override
  State<RangeSliderPage> createState(){
     return RangeSliderPageState();
  }
}

class RangeSliderPageState extends State<RangeSliderPage>
{
   RangeValues value = RangeValues(0, 100);
   @override
   Widget build(BuildContext context)
   {
      RangeLabels labels = RangeLabels(value.start.toString(), value.end.toString());
      return Scaffold(
        appBar: AppBar(
          title: Text("Shimbhu's AI")
        ),
        body: Center(
            child: RangeSlider(
            values: value,  
            labels: labels,
            divisions: 20,
            min: 0,
            max: 100,
            activeColor: Colors.purple,
            inactiveColor: Colors.purple.shade200,
            onChanged: (newValue){
                 value = newValue;
                 print("start: ${newValue.start}, end : ${newValue.end}");  
                 setState(() {
                   
                 });

            },
            ),
        ),
        

      );
   }
}