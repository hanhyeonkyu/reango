from django.conf.urls import url
from .views import UserViewSet

# if you setting viewset - you can make CRUD easily
# A viewset that provides default create(), retrieve(), update(), partial_update(), destroy() and list() actions.
# get - all_user list & post - create new user
user_list = UserViewSet.as_view({"get": "list", "post": "create"})
# get - get 1 user & patch - update 1 user & delete - delete 1 user
user_detail = UserViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)

# url pattern for above action - using regex
urlpatterns = [
    url("^user/$", user_list, name="user-list"),
    url("^user/(?P<pk>[0-9]+)/$", user_detail, name="user-detail"),
]