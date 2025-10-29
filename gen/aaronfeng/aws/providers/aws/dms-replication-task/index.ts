// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}
  */
  readonly cdcStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#id DmsReplicationTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}
  */
  readonly migrationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}
  */
  readonly replicationInstanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}
  */
  readonly replicationTaskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}
  */
  readonly replicationTaskSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}
  */
  readonly sourceEndpointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}
  */
  readonly tableMappings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}
  */
  readonly targetEndpointArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task aws_dms_replication_task}
*/
export class DmsReplicationTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_replication_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsReplicationTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsReplicationTask to import
  * @param importFromId The id of the existing DmsReplicationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsReplicationTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_replication_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/dms_replication_task aws_dms_replication_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsReplicationTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DmsReplicationTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_replication_task',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdcStartTime = config.cdcStartTime;
    this._id = config.id;
    this._migrationType = config.migrationType;
    this._replicationInstanceArn = config.replicationInstanceArn;
    this._replicationTaskId = config.replicationTaskId;
    this._replicationTaskSettings = config.replicationTaskSettings;
    this._sourceEndpointArn = config.sourceEndpointArn;
    this._tableMappings = config.tableMappings;
    this._tags = config.tags;
    this._targetEndpointArn = config.targetEndpointArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_start_time - computed: false, optional: true, required: false
  private _cdcStartTime?: string; 
  public get cdcStartTime() {
    return this.getStringAttribute('cdc_start_time');
  }
  public set cdcStartTime(value: string) {
    this._cdcStartTime = value;
  }
  public resetCdcStartTime() {
    this._cdcStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcStartTimeInput() {
    return this._cdcStartTime;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // migration_type - computed: false, optional: false, required: true
  private _migrationType?: string; 
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationTypeInput() {
    return this._migrationType;
  }

  // replication_instance_arn - computed: false, optional: false, required: true
  private _replicationInstanceArn?: string; 
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }
  public set replicationInstanceArn(value: string) {
    this._replicationInstanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceArnInput() {
    return this._replicationInstanceArn;
  }

  // replication_task_arn - computed: true, optional: false, required: false
  public get replicationTaskArn() {
    return this.getStringAttribute('replication_task_arn');
  }

  // replication_task_id - computed: false, optional: false, required: true
  private _replicationTaskId?: string; 
  public get replicationTaskId() {
    return this.getStringAttribute('replication_task_id');
  }
  public set replicationTaskId(value: string) {
    this._replicationTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTaskIdInput() {
    return this._replicationTaskId;
  }

  // replication_task_settings - computed: false, optional: true, required: false
  private _replicationTaskSettings?: string; 
  public get replicationTaskSettings() {
    return this.getStringAttribute('replication_task_settings');
  }
  public set replicationTaskSettings(value: string) {
    this._replicationTaskSettings = value;
  }
  public resetReplicationTaskSettings() {
    this._replicationTaskSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTaskSettingsInput() {
    return this._replicationTaskSettings;
  }

  // source_endpoint_arn - computed: false, optional: false, required: true
  private _sourceEndpointArn?: string; 
  public get sourceEndpointArn() {
    return this.getStringAttribute('source_endpoint_arn');
  }
  public set sourceEndpointArn(value: string) {
    this._sourceEndpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointArnInput() {
    return this._sourceEndpointArn;
  }

  // table_mappings - computed: false, optional: false, required: true
  private _tableMappings?: string; 
  public get tableMappings() {
    return this.getStringAttribute('table_mappings');
  }
  public set tableMappings(value: string) {
    this._tableMappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMappingsInput() {
    return this._tableMappings;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_endpoint_arn - computed: false, optional: false, required: true
  private _targetEndpointArn?: string; 
  public get targetEndpointArn() {
    return this.getStringAttribute('target_endpoint_arn');
  }
  public set targetEndpointArn(value: string) {
    this._targetEndpointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetEndpointArnInput() {
    return this._targetEndpointArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_start_time: cdktf.stringToTerraform(this._cdcStartTime),
      id: cdktf.stringToTerraform(this._id),
      migration_type: cdktf.stringToTerraform(this._migrationType),
      replication_instance_arn: cdktf.stringToTerraform(this._replicationInstanceArn),
      replication_task_id: cdktf.stringToTerraform(this._replicationTaskId),
      replication_task_settings: cdktf.stringToTerraform(this._replicationTaskSettings),
      source_endpoint_arn: cdktf.stringToTerraform(this._sourceEndpointArn),
      table_mappings: cdktf.stringToTerraform(this._tableMappings),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_endpoint_arn: cdktf.stringToTerraform(this._targetEndpointArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_start_time: {
        value: cdktf.stringToHclTerraform(this._cdcStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_type: {
        value: cdktf.stringToHclTerraform(this._migrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_instance_arn: {
        value: cdktf.stringToHclTerraform(this._replicationInstanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_task_id: {
        value: cdktf.stringToHclTerraform(this._replicationTaskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_task_settings: {
        value: cdktf.stringToHclTerraform(this._replicationTaskSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endpoint_arn: {
        value: cdktf.stringToHclTerraform(this._sourceEndpointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_mappings: {
        value: cdktf.stringToHclTerraform(this._tableMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_endpoint_arn: {
        value: cdktf.stringToHclTerraform(this._targetEndpointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
