from django.shortcuts import render
from django.views.generic import TemplateView, CreateView, ListView

# Create your views here.
class Index(TemplateView):
    template_name = "index.html"
    