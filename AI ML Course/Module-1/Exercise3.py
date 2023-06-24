numbers = [2,4,6,8,10];

def calculate_average(values):
    totalSum = 0;
    for el in values:
        totalSum+=el;
    average = totalSum/len(values);
    
    return average;

average = calculate_average(numbers);
print("average of list numbers is this : ",average);
         