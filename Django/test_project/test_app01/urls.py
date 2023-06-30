# importing path from django.urls to define the url patterns
from django.urls import path
# importing the views.py file from the current directory
from . import views

# defining the url patterns storing them in urlpatterns variable
urlpatterns = [
    
    # path takes 3 arguments, first is the url pattern, second is the function to be called when the url is requested, third is the name of the url pattern
    # here the 1st argument is empty string, which means this url pattern will be called when the base url is requested
    path('', views.index, name='index'),
]

# now also have to include the urls.py file of the app in the urls.py file of the project