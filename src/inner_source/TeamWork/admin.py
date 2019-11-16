from django.contrib import admin
from .models import Employee , Help , Response , Team ,TeamEmployee , TeamGoal , GoalProgress
# Register your models here.

admin.site.register(Employee)
admin.site.register(Help)
admin.site.register(Response)
admin.site.register(Team)
admin.site.register(TeamEmployee)
admin.site.register(TeamGoal)
admin.site.register(GoalProgress)