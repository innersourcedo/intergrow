from django.contrib import admin
from .models import Employee , Help , Response , Team ,TeamEmployee , TeamGoal , GoalProgress , Organization , Department ,Hierarchy  , OrgRole
# Register your models here.

admin.site.register(Employee)
admin.site.register(Help)
admin.site.register(Response)
admin.site.register(Team)
admin.site.register(TeamEmployee)
admin.site.register(TeamGoal)
admin.site.register(GoalProgress)
admin.site.register(Organization)
admin.site.register(Department)
admin.site.register(Hierarchy)
admin.site.register(OrgRole)
