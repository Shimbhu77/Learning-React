package com.ana;

public class Sum {

	public static int SumOf(int x)
	{
		int y=x*(x+1)/2;
		return y;
		
	}
	public static void main(String[] args) {
       int n=6;
       int z=SumOf(n);
       System.out.println(z);
	}

}
