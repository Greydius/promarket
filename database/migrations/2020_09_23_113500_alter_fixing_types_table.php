<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterFixingTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fixing_types', function (Blueprint $table) {
            $table->string('small_img');
            $table->string('breadcrumb');
            $table->string('device_type');
            $table->string('title');
            $table->string('background_image');
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fixing_types', function (Blueprint $table) {
            $table->dropColumn('small_img');
            $table->dropColumn('breadcrumb');
            $table->dropColumn('device_type');
            $table->dropColumn('title');
            $table->dropColumn('background_image');
            $table->dropColumn('description');
        });
    }
}
