<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToUsers2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('firstname')->after('username')->nullable();
            $table->string('region')->after('email')->nullable();
            $table->string('city')->after('region')->nullable();
            $table->string('delivery_address')->after('city')->nullable();
            $table->enum('identification_type',['0','1'])->default('0')->after('firstname')->nullable();
            $table->string('postcode')->after('delivery_address')->nullable();
            $table->string('avatar')->after('identification_type')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('firstname');
            $table->dropColumn('region');
            $table->dropColumn('city');
            $table->dropColumn('delivery_address');
            $table->dropColumn('identification_type');
            $table->dropColumn('postcode');
            $table->dropColumn('avatar');
        });
    }
}
