"""
This XBlock will show a set of recommended resources which may be helpful to
students solving a given problem.
"""
# We avoid importing RecommenderXBlock here, because it's importing Filesystem from xblock.reference.plugins
# which is not loaded when running `manage.py` commands (which is used by `make compile_translations`)
# from .recommender import RecommenderXBlock

__version__ = '3.1.0'
