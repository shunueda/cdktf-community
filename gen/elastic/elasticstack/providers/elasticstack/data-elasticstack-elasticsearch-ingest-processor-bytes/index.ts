// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackElasticsearchIngestProcessorBytesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#description DataElasticstackElasticsearchIngestProcessorBytes#description}
  */
  readonly description?: string;
  /**
  * The field to convert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#field DataElasticstackElasticsearchIngestProcessorBytes#field}
  */
  readonly field: string;
  /**
  * Conditionally execute the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#if DataElasticstackElasticsearchIngestProcessorBytes#if}
  */
  readonly if?: string;
  /**
  * Ignore failures for the processor. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#ignore_failure DataElasticstackElasticsearchIngestProcessorBytes#ignore_failure}
  */
  readonly ignoreFailure?: boolean | cdktf.IResolvable;
  /**
  * If `true` and `field` does not exist or is `null`, the processor quietly exits without modifying the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#ignore_missing DataElasticstackElasticsearchIngestProcessorBytes#ignore_missing}
  */
  readonly ignoreMissing?: boolean | cdktf.IResolvable;
  /**
  * Handle failures for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#on_failure DataElasticstackElasticsearchIngestProcessorBytes#on_failure}
  */
  readonly onFailure?: string[];
  /**
  * Identifier for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#tag DataElasticstackElasticsearchIngestProcessorBytes#tag}
  */
  readonly tag?: string;
  /**
  * The field to assign the converted value to, by default `field` is updated in-place
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#target_field DataElasticstackElasticsearchIngestProcessorBytes#target_field}
  */
  readonly targetField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes elasticstack_elasticsearch_ingest_processor_bytes}
*/
export class DataElasticstackElasticsearchIngestProcessorBytes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_ingest_processor_bytes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackElasticsearchIngestProcessorBytes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackElasticsearchIngestProcessorBytes to import
  * @param importFromId The id of the existing DataElasticstackElasticsearchIngestProcessorBytes that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackElasticsearchIngestProcessorBytes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_ingest_processor_bytes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/data-sources/elasticsearch_ingest_processor_bytes elasticstack_elasticsearch_ingest_processor_bytes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackElasticsearchIngestProcessorBytesConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackElasticsearchIngestProcessorBytesConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_ingest_processor_bytes',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._field = config.field;
    this._if = config.if;
    this._ignoreFailure = config.ignoreFailure;
    this._ignoreMissing = config.ignoreMissing;
    this._onFailure = config.onFailure;
    this._tag = config.tag;
    this._targetField = config.targetField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if - computed: false, optional: true, required: false
  private _if?: string; 
  public get if() {
    return this.getStringAttribute('if');
  }
  public set if(value: string) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
  }

  // ignore_failure - computed: false, optional: true, required: false
  private _ignoreFailure?: boolean | cdktf.IResolvable; 
  public get ignoreFailure() {
    return this.getBooleanAttribute('ignore_failure');
  }
  public set ignoreFailure(value: boolean | cdktf.IResolvable) {
    this._ignoreFailure = value;
  }
  public resetIgnoreFailure() {
    this._ignoreFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFailureInput() {
    return this._ignoreFailure;
  }

  // ignore_missing - computed: false, optional: true, required: false
  private _ignoreMissing?: boolean | cdktf.IResolvable; 
  public get ignoreMissing() {
    return this.getBooleanAttribute('ignore_missing');
  }
  public set ignoreMissing(value: boolean | cdktf.IResolvable) {
    this._ignoreMissing = value;
  }
  public resetIgnoreMissing() {
    this._ignoreMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingInput() {
    return this._ignoreMissing;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string[]; 
  public get onFailure() {
    return this.getListAttribute('on_failure');
  }
  public set onFailure(value: string[]) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      field: cdktf.stringToTerraform(this._field),
      if: cdktf.stringToTerraform(this._if),
      ignore_failure: cdktf.booleanToTerraform(this._ignoreFailure),
      ignore_missing: cdktf.booleanToTerraform(this._ignoreMissing),
      on_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._onFailure),
      tag: cdktf.stringToTerraform(this._tag),
      target_field: cdktf.stringToTerraform(this._targetField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if: {
        value: cdktf.stringToHclTerraform(this._if),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_failure: {
        value: cdktf.booleanToHclTerraform(this._ignoreFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_missing: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._onFailure),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_field: {
        value: cdktf.stringToHclTerraform(this._targetField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
