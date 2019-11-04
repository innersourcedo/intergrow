
#thid isthe view for mentor and mentee profile creator
from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to Mentor & Mentee Coloberation page")
