#include <stdio.h>
#include <string.h>
#define _CRT_SECURE_NO_WARNINGS

void main() {
    char x[25];

    printf("input : ");
    scanf("%s", &x);

    if(strcmp(x,"H3ll0_R3v3r51n9_t0o1")==0) {
        printf("Correct"); // Correct
    } else {
        printf("Wrong"); // Wrong
    }
}