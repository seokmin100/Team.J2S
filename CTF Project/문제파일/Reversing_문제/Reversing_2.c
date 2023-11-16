#include <stdio.h>
#include <string.h>
#define _CRT_SECURE_NO_WARNINGS

void main() {
    char x[25];

    printf("input : ");
    scanf("%s", &x);

    if(strcmp(x,"rEv3rs1n9_15_v3ry_3asy")==0) {
        printf("Correct"); // Correct
    } else {
        printf("Wrong"); // Wrong
    }
}