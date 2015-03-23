/* strtok example */
#include <stdio.h>
#include <string.h>
#include <string>
using namespace std;

int main ()
{
    String command = "solid,red";
    int pIndex = command.indexOf(',');
    String pattern = command.substring(0, pIndex);
    printf ("%s\n",pattern);

  return 0;
}
