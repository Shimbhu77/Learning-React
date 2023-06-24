num1 = input("Enter first number: ");
num1 = int(num1);
num2 = input("Enter second number : ");
num2 = int(num2);
operation = input("Enter Operation symbol : ");

if operation=="+":
    print(num1+num2);
elif operation=="-":
    print(num1-num2);
elif operation=="*":
    print(num1*num2);
elif operation=="/":
    print(num1/num2);