from django.shortcuts import render

# importing the HttpResponse library from django.http for returning a response to the client
from django.http import HttpResponse

# defining a function to be called when the url is requested
def index(request):
    # returning a response to the client
    return HttpResponse("Hello, world. You're at the polls index.")
